import React from "react";
import { Box, Group, Paper, Stack, Text } from "@mantine/core";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Stack h="100%">
			<Paper shadow="xs" p="sm" withBorder radius={0}>
				<Group justify="space-between">
					<Text>Plajta catering robot</Text>

					<ThemeSwitcher />
				</Group>
			</Paper>

			<Box h="100%" px="sm">
				{children}
			</Box>
		</Stack>
	);
}
