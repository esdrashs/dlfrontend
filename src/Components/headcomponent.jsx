import react from "react";
import './css/styles.css'; //imports local css

const HeadComponent = () => {
  return <head>
                    <meta charSet="utf-8" />
                    <title>DL AppStudio - Home</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="DL Appstudio" />                                        
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
                    
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
                    
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
                    
                    <link href="./css/styles.css" rel="stylesheet" />
                </head>;
};

export default HeadComponent;