import React from "react";
import { Divider, Grid, Paper } from "@mantine/core";

export interface CardProps {
	height?: number | string;
	header?: {
		leftSection?: React.ReactNode;
		centerSection?: React.ReactNode;
		rightSection?: React.ReactNode;
	};
	divider?: boolean;
	children: React.ReactNode;
}

export function Card({ height, header, divider, children }: CardProps) {
	return (
		<Paper withBorder shadow="xs" radius="lg" p="xl" h={height || 500}>
			{header && (
				<Grid mb={divider ? 0 : 20}>
					{header.leftSection && (
						<Grid.Col span="auto">{header.leftSection}</Grid.Col>
					)}
					{header.centerSection && (
						<Grid.Col span={8}>{header.centerSection}</Grid.Col>
					)}
					{header.rightSection && (
						<Grid.Col span="auto">{header.rightSection}</Grid.Col>
					)}
				</Grid>
			)}

			{divider && <Divider mb={20} />}

			{children}
		</Paper>
	);
}
