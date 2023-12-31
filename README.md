# SpaceX Landings Page

## Introduction

The SpaceX Landings Page is an application that presents information about SpaceX launches using data from the SpaceX API. Users can view details about each launch, including success or failure, relevant Wikipedia articles, summaries, and videos.

## Features

- **Launch List:** Displays the first 20 launches as per the SpaceX API data.
- **Launch Details:** Clicking on a launch card will navigate to a detailed page with more information about the flight.
- **Launch Video:** Each detailed page contains an embedded video of the landing when available.
- **Success Filter:** Users can filter launches by their success status on the main page.
- **Pagination:** Support for pagination is included, showing 20 launches per page.

## API Reference

The information is fetched from the SpaceX API endpoint: `https://api.spacexdata.com/v4/launches`

## Setup and Installation

Instructions for setting up the application locally.

```bash
# Clone the repository
git clone https://github.com/GuyElizarov/sapaceX.git

# Navigate to the project directory
cd SpaceX-Landings-Page

# Install dependencies
npm install

# Run the application
npm start
