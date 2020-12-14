import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { Button } from "react-native";
import { colors } from "react-native-elements";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function SpotifyButton() {
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: "f7cc63049ef24e62919d48b826a6c101",
            scopes: ["user-read-email", "playlist-modify-public"],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            // For usage in managed apps using the proxy
            redirectUri: makeRedirectUri({
                // For usage in bare and standalone
                native: "moosic://Login",
            }),
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === "success") {
            const { code } = response.params;
            //console.log(code);
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login with Spotify"
            onPress={() => {
                promptAsync();
            }}
        />
    );
}
