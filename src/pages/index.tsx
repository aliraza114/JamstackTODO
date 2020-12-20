import React, { useContext } from "react"
import PageLayout from "../pageLayout/pageLayout"
import Button from "react-bootstrap/Button"
import { identityContext } from "../context/authContext"
import Jumbotron from "react-bootstrap/Jumbotron"
const styles = require("./index.module.css")

export default function Home() {
  const { user, identity } = useContext(identityContext)

  return (
    <PageLayout>
      <Jumbotron className={styles.jumbotron}>
        {!user ? (
          <Button
            onClick={() => {
              identity.open()
            }}
            variant="primary"
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={() => {
              identity.logout()
            }}
            variant="secondary"
          >
            Logout
          </Button>
        )}
      </Jumbotron>
    </PageLayout>
  )
}
