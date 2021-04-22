# https://vilas-shivamallu.github.io/UI5-SVAR/webapp/

# UI5-SVAR

Installation
Install the CLI using the npm package manager:

npm install --global @ui5/cli

# Verify installation
ui5 --help

# If your project does not have a package.json file, let npm generate it:

npm init --yes

# Generate the ui5.yaml file:

ui5 init

# Define the framework you want to use

ui5 use openui5@latest

# Add required libraries

ui5 add sap.ui.core sap.m sap.ui.table themelib_sap_fiori_3 # [...]

# Start the server

ui5 serve
