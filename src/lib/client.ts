import { createClient } from "@sanity/client";

const client = createClient({
   projectId:"xvvfazqt",
   dataset:"production",
   useCdn:true,
   token:"skRW45yNIpnEMZI41ZW69pUvukjW3UlVfG6B95iCuQl7k7dBwbkr5AWngo9ZoXckxBpmg2KhnhA8RRMb2bNIKQSZqMMsSHGfxUp7fmXe7Xx0uenk2UA7RVynYg54b7et3FTXQ3tmPFGozQ9s67qsx7t1ceFFiF8WsyC83biubQHm3TYrV2Kl",
   apiVersion:"2023-10-04"
})

export default client