import { Grid } from "@mantine/core";
import { Card } from "~/components/Card";
import { Layout } from "~/components/Layout";

export default function Home() {
	return (
		<Layout>
			<Grid h="100%">
				<Grid.Col span={2}>
					<Card>1</Card>
				</Grid.Col>

				<Grid.Col span={8}>
					<Card>2</Card>
				</Grid.Col>

				<Grid.Col span={2}>
					<Card>3</Card>
				</Grid.Col>
			</Grid>
		</Layout>
	);
}
