import "@mantine/core/styles.css";
import "~/styles/main.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={theme} defaultColorScheme="light">
			<Component {...pageProps} />
		</MantineProvider>
	);
}
