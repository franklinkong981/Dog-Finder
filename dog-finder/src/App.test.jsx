import React from "react";
import App from "./App";
import {render, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Test <App/> rendering", function () {
  it("renders without crashing", function() {
    render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));
  });
  it ("matches the snapshot for the MadLibs component", function() {
    const {asFragment} = render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Tests functionality of the App component with routing", function() {
  it("Makes sure the links on the page work", function() {
    const {getByText} = render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));
    
    expect(getByText("Welcome to the Dog Finder!")).toBeInTheDocument();
  
    //tests a link. Does clicking on Whiskey link take you to Whiskey details page, is there a button there that takes you back to the home page?
    let whiskeyLink = getByText("Whiskey - 5 years old");
    expect(whiskeyLink).toBeInTheDocument();
    fireEvent.click(whiskeyLink);
  
    //should be on Whiskey details page now.
    expect(whiskeyLink).not.toBeInTheDocument();
    const whiskeyFunFact = getByText("Whiskey loves eating popcorn.");
    expect(whiskeyFunFact).toBeInTheDocument();
    const backToHomeButton = getByText("Back to Home Page");
    expect(backToHomeButton).toBeInTheDocument();
    fireEvent.click(backToHomeButton);
  
    //should be back at the home page now.
    whiskeyLink = getByText("Whiskey - 5 years old");
    expect(whiskeyLink).toBeInTheDocument();
  });

  it("Makes sure the navigation links work", function() {
    const {getByText} = render((
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    ));

    const perryNavLink = getByText("Perry");
    expect(perryNavLink).toBeInTheDocument();
    const tubbyNavLink = getByText("Tubby");
    expect(tubbyNavLink).toBeInTheDocument();
    fireEvent.click(perryNavLink);

    //We should now be on Perry's page.
    expect(perryNavLink).toBeInTheDocument();
    expect(tubbyNavLink).toBeInTheDocument();
    const perryFunFact = getByText("Perry loves all humans.");
    expect(perryFunFact).toBeInTheDocument();
    fireEvent.click(tubbyNavLink);

    //We should now be on Tubby's page.
    expect(perryNavLink).toBeInTheDocument();
    expect(tubbyNavLink).toBeInTheDocument();
    const tubbyFunFact = getByText("Tubby is really stupid.");
    expect(tubbyFunFact).toBeInTheDocument();
  });
});

