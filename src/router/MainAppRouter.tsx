import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFoundPage from "src/pages/not-found/NotFoundPage";
import MainPage from "src/pages/main/MainPage";

const MainAppRouter = () => {
	return (
		<Switch>
			<Route
				path={'/'}
				component={MainPage}
				exact
			/>
			<Route component={NotFoundPage}/>
	</Switch>
);
}

export default MainAppRouter;
