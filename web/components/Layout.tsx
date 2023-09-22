import React from "react";
import { Box, Paper, Stack } from "@mantine/core";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Stack h="100%">
			<Paper shadow="xs" p="sm">
				Header
			</Paper>

			<Box h="100%" px="sm">
				{children}
			</Box>
		</Stack>
	);
}
