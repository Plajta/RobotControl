import { Grid } from "@mantine/core";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

export default function Home() {
	return (
		<Layout>
			<Grid h="100%">
				<Grid.Col span={2}>
					<Card height="88vh">1</Card>
				</Grid.Col>

				<Grid.Col span={8}>
					<Card height="88vh">2</Card>
				</Grid.Col>

				<Grid.Col span={2}>
					<Card height="88vh">3</Card>
				</Grid.Col>
			</Grid>
		</Layout>
	);
}
