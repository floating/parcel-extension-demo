# parcel-extension-demo


### Build Extension
`npm run build`

This will build the extention into `./ext`

### Add Extension to Chrome

In the Chrome extensions menu make sure "Developer Mode" is enabled. Then select "Load Unpacked" and navigate the `parcel-extension-demo/ext` directory.

Once the extension is added start the app. 

### Start App

`npm start`

When the app opens look for "Parcel demo extension: I am injected!" in the console to make sure the extension is working. If it is then try to update the background color via HMR.

After that go back to the extensions menu and toggle off the extension, then reload the page and try updating via HMR again.
