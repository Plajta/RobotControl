import { useState, useEffect } from "react";
import { Grid, Text, Tabs, Stack, Group, Paper, rem } from "@mantine/core";
import { IconCamera, IconChartLine, IconWorld } from "@tabler/icons-react";
import { socket } from "~/modules/socket";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

import classes from "~/styles/Tabs.module.css";
import dayjs from "dayjs";

interface Data {
	start_time: number;
	battery: number;
	n_objects: number;
	start_objects: number;
}

export default function Home() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [date, setDate] = useState(new Date());
	const [currentData, setCurrentData] = useState<Data | null>(
		process.env.NODE_ENV === "development"
			? {
					start_time: 1695433823,
					battery: 90,
					n_objects: 2,
					start_objects: 2,
			  }
			: null,
	);
	const [feedMessages, setFeedMessages] = useState([
		{ content: "Ztratil jsem Red Bull. Lokace byla označena na mapě." },
		{ content: "Ztratil jsem Red Bull. Lokace byla označena na mapě." },
		{ content: "Ztratil jsem Red Bull. Lokace byla označena na mapě." },
		{ content: "Ztratil jsem Red Bull. Lokace byla označena na mapě." },
	]);

	const iconStyle = { width: rem(12), height: rem(12) };

	function getCameraFeed() {
		return process.env.NODE_ENV === "development"
			? "https://www.chmi.cz/files/portal/docs/meteo/kam/plzen.jpg"
			: "http://localhost:6969/video";
	}

	function getMapFeed() {
		return process.env.NODE_ENV === "development"
			? "https://www.chmi.cz/files/portal/docs/meteo/kam/plzen.jpg"
			: "http://localhost:6969/map";
	}

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}

		function onDataEvent(value: any) {
			setCurrentData(value);
		}

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("data", onDataEvent);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("data", onDataEvent);
		};
	}, []);

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	}, []);

	return (
		<Layout>
			<Grid h="100%">
				<Grid.Col span={2}>
					<Card
						divider
						px="xs"
						height={980}
						header={<Text fw="bold">Info</Text>}
					>
						{currentData && (
							<Stack gap={0} pt="xs">
								<Group justify="space-between">
									<Text>Stav Baterie</Text>
									<Text>{currentData.battery} %</Text>
								</Group>

								<Group justify="space-between">
									<Text>Doba jízdy</Text>

									<Text>
										{dayjs(
											dayjs(date).diff(
												dayjs(
													currentData.start_time *
														1000,
												),
											),
										).format("mm:ss")}
									</Text>
								</Group>

								<Group justify="space-between">
									<Text>Počet Red Bullů</Text>

									<Text>{currentData.n_objects}</Text>
								</Group>

								<Group justify="space-between">
									<Text>Počet Ztracených Red Bullů</Text>

									<Text>
										{currentData.start_objects -
											currentData.n_objects}
									</Text>
								</Group>
							</Stack>
						)}
					</Card>
				</Grid.Col>

				<Grid.Col span={8}>
					<Card height={980}>
						<Tabs defaultValue="camera" classNames={classes}>
							<Tabs.List>
								<Tabs.Tab
									value="camera"
									styles={{
										tabLabel: { fontWeight: "bold" },
									}}
									leftSection={
										<IconCamera style={iconStyle} />
									}
								>
									Kamera
								</Tabs.Tab>

								<Tabs.Tab
									value="map"
									styles={{
										tabLabel: { fontWeight: "bold" },
									}}
									leftSection={
										<IconWorld style={iconStyle} />
									}
								>
									Mapa
								</Tabs.Tab>

								<Tabs.Tab
									value="charts"
									styles={{
										tabLabel: { fontWeight: "bold" },
									}}
									leftSection={
										<IconChartLine style={iconStyle} />
									}
								>
									Grafy
								</Tabs.Tab>
							</Tabs.List>

							<Tabs.Panel value="camera">
								<img
									src={getCameraFeed()}
									alt="camera feed"
									width="100%"
								/>
							</Tabs.Panel>

							<Tabs.Panel value="map">
								<img
									src={getMapFeed()}
									alt="camera feed"
									width="100%"
								/>
							</Tabs.Panel>

							<Tabs.Panel value="charts">
								Settings tab content
							</Tabs.Panel>
						</Tabs>
					</Card>
				</Grid.Col>

				<Grid.Col span={2}>
					<Card
						divider
						px="xs"
						height={980}
						header={<Text fw="bold">Feed</Text>}
					>
						<Stack mt="xs">
							{feedMessages.map((message) => (
								<Paper
									p="sm"
									radius="md"
									style={(sx) => ({
										background: sx.colors.blue[7],
										color: "white",
									})}
								>
									{message.content}
								</Paper>
							))}
						</Stack>
					</Card>
				</Grid.Col>
			</Grid>
		</Layout>
	);
}
