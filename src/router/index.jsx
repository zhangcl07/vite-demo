import React, { memo, useMemo } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from '../App'

/**
 * 路由配置
 */
const RouterView = () => {
  const routesConfig = useMemo(
    () => [
      {
        path: '/card',
        component: React.lazy(() => import('../views/card')),
        fallback: <div />,
      },
    ],
    []
  )

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<App />} key="/" />
          {routesConfig.map((e) => (
            <Route
              exact
              path={e.path}
              element={
                <React.Suspense fallback={e.fallback}>
                  <e.component />
                </React.Suspense>
              }
              key={e.path}
            />
          ))}
        </Routes>
      </>
    </Router>
  )
}

export default memo(RouterView)
