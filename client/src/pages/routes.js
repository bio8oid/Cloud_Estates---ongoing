import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import PropertiesList from "./propertiesList"
import PropertyView from "./propertyView"
import IndexPage from "./index"

export default (
    <Router>
        <IndexPage path="/">
            <PropertiesList path="/propertiesList/:tag" />
            <PropertyView path="PropertyView/:id" />
        </IndexPage>
    </Router>
    );
