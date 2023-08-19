import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const Fantasy = () => {
    return (
        <Text>Fantasy Test</Text>
    )
}

export default Fantasy;