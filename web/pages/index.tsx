import { Grid } from "@mantine/core";
import { Card } from "~/components/Card";

export default function Home() {
	return (
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
	);
}
