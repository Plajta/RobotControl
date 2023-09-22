import { Grid, Text } from "@mantine/core";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

export default function Home() {
	function getCameraFeed() {
		return process.env.NODE_ENV === "development"
			? "https://www.chmi.cz/files/portal/docs/meteo/kam/plzen.jpg"
			: "http://localhost:6969/video";
	}

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
