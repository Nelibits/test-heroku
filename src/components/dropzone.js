import React from "react";
import DropzoneComponent from "react-dropzone-component";
import "dropzone/dist/min/dropzone.min.css";

// Set up configuration for the dropzone
const dropzoneConfig = {
  postUrl: 'no-url', // URL to POST uploaded files. Set 'no-url' to disable auto-upload
};

const djsConfig = {
  addRemoveLinks: true,
  acceptedFiles: "image/jpeg,image/png,image/gif",
};

const eventHandlers = {
  addedfile: (file) => console.log(file), // Handle file added event
};

const MyDropzone = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <DropzoneComponent
        config={dropzoneConfig}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    </div>
  );
};

export default MyDropzone;