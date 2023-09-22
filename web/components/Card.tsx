import React from "react";
import { Box, Center, Divider, Grid, Paper } from "@mantine/core";

export interface CardProps {
	height?: number | string;
	header?: React.ReactNode;
	divider?: boolean;
	children: React.ReactNode;
}

export function Card({ height, header, divider, children }: CardProps) {
	return (
		<Paper
			withBorder
			shadow="xs"
			radius="lg"
			pt={header && "xs"}
			h={height || 500}
		>
			{header && <Center>{header}</Center>}

			{divider && <Divider mb={10} />}

			<Box px="md">{children}</Box>
		</Paper>
	);
}
