import { MetadataRoute } from "next";

/* with robots we can add the rules for the user who search our website and what navigator they use */
export const robots = () : MetadataRoute.Robots => {

 return {
    rules : {
        //this meach that all the navigator can see our website
        // if we want that only google can see our website we can use "googlebots" as userAgent
        userAgent : "*",

        // this mean that we allow the user to go in this route of our website
        allow : "/",

        // this mean that we forbide the user to go in this path of our website
        disallow : "/private"
    },

    // path of the sitemap file and the extension is xml
    sitemap : "http://localhost:3000/sitemap.xml"
 }
}