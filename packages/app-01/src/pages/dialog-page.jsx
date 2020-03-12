import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DialogMarkdown from "../docs/Dialog.md";
import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";

const Dialog = React.lazy(() => import("app_02/Dialog"));
/* const SvelteApp = React.lazy(() => import("./SvelteApp")); */


const DialogPage = () => {


  return (
    <Page title="Dialog Demo">
      <Markdown>{DialogMarkdown}</Markdown>

      <React.Suspense fallback="Loading Dialog...">
{/*         <SvelteApp /> */}
        <Dialog />
      </React.Suspense>
    </Page>)
}


export default DialogPage;
