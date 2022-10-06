import React from "react";
import Welcome from "./welcome";
import Feed from "./feed";

// TODO there has to be a better way than this...
function LandingPage(props) {
    if (props.user)
        return <Feed />;
    return <Welcome />;
}

export default LandingPage;