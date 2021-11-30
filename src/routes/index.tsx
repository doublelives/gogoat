import { Routes, Route, useRoutes } from "react-router";
import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";
import Goods from "@/pages/goods";
import NoMatch from "@/pages/NoMatch";
import Mine from "@/pages/mine";
import BaseLayout from "@/layout/baseLayout";

// const RoutePage = () => <Routes>
//   <Route path="/" element={<BaseLayout />}>
//     <Route index element={<Home />} />
//     <Route path="home" element={<Home />} />
//     <Route path="goods" element={<Goods />} />
//   </Route>
// </Routes>

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/goods",
        element: <Goods />,
        // children: [
        //   { index: true, element: <CoursesIndex /> },
        //   { path: "/courses/:id", element: <Course /> }
        // ]
      },
      {
        path: "/mine",
        element: <Mine />
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export const aliasRouteMap = {
  '/goods': '物料市场',
  '/mine': '个人中心'
};


const RoutePage = () => {
  const routeElement = useRoutes(routes);
  return <>{routeElement}</>;
};

export default RoutePage;
