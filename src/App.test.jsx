import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "./App"

describe("App component", () => {
  it("renders the Timer heading", () => {
    render(<App />)
    const timerElement = screen.getByText(/Timer:/i)
    expect(timerElement).toBeInTheDocument()
  })
})
