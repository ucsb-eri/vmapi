vmapi

Trying to set this up as an api for info for our VM hosts to query for 
DHCP (and possibly DNS) information.  

Currently I have to set up ssh keys to allow the host to make the request.
But this should be an interesting solution that doesn't expose any unneeded data.

requires a config.json file that has the current object data keys:
* dhcpMap : path to a json file containing a map of dhcp clients to MAC addresses

It is the users responsibility to create the dhcpMap file with their data.
At ERI, the file is built by a simple filter script run at build time that converts
the dhcpd.conf data into dhcpClients.json