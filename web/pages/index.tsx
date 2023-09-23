import { useState, useEffect } from "react";
import { Grid, Text, Tabs, rem } from "@mantine/core";
import { IconCamera, IconChartLine, IconWorld } from "@tabler/icons-react";
import { socket } from "~/modules/socket";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

import classes from "~/styles/Tabs.module.css";

export default function Home() {
	const [isConnected, setIsConnected] = useState(socket.connected);

	const iconStyle = { width: rem(12), height: rem(12) };

	function getCameraFeed() {
		return process.env.NODE_ENV === "development"
			? "https://www.chmi.cz/files/portal/docs/meteo/kam/plzen.jpg"
			: "http://localhost:6969/video";
	}

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}

		function onDataEvent(value: any) {
			console.log(value);
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

	return (
		<Layout>
			<Grid h="100%">
				<Grid.Col span={2}>
					<Card
						divider
						px="xs"
						height="88vh"
						header={<Text fw="bold">Info</Text>}
					>
						1
					</Card>
				</Grid.Col>

				<Grid.Col span={8}>
					<Card height="88vh">
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
								Messages tab content
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
						height="88vh"
						header={<Text fw="bold">Feed</Text>}
					>
						3
					</Card>
				</Grid.Col>
			</Grid>
		</Layout>
	);
}
