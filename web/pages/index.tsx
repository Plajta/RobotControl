import { useState, useEffect } from "react";
import { Grid, Text } from "@mantine/core";
import { socket } from "~/modules/socket";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

export default function Home() {
	const [isConnected, setIsConnected] = useState(socket.connected);

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
						height="88vh"
						header={<Text fw="bold">Info</Text>}
					>
						1
					</Card>
				</Grid.Col>

				<Grid.Col span={8}>
					<Card
						divider
						height="88vh"
						header={<Text fw="bold">Vizualizace</Text>}
					>
						<img
							src={getCameraFeed()}
							alt="camera feed"
							width="50%"
						/>
					</Card>
				</Grid.Col>

				<Grid.Col span={2}>
					<Card
						divider
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
