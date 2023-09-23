import React from "react";
import {
	Box,
	Center,
	Divider,
	Paper,
	type MantineSpacing,
} from "@mantine/core";

export interface CardProps {
	height?: number | string;
	header?: React.ReactNode;
	divider?: boolean;
	px?: MantineSpacing;
	children: React.ReactNode;
}

export function Card({ height, header, divider, px, children }: CardProps) {
	return (
		<Paper withBorder shadow="xs" radius="sm" h={height || 500}>
			{header && <Center py={5}>{header}</Center>}

			{divider && <Divider />}

			<Box px={px} h="100%">
				{children}
			</Box>
		</Paper>
	);
}
