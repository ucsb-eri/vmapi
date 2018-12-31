vmapi

Trying to set this up as an api for info for our VM hosts to query for 
DHCP (and possibly DNS) information.  

Currently I have to set up ssh keys to allow the host to make the request.
But this should be an interesting solution that doesn't expose any unneeded data.

requires a config.json file that has the current object data keys:
* dhcpMap : path to a json file containing a map of dhcp clients to MAC addresses
* ethers2hostMap : path to a json file containing a map of MAC addresses to hosts

It is the users responsibility to create the dhcpMap file with their data.
At ERI, the file is built by a simple filter script run at build time that converts
the dhcpd.conf data into dhcpClients.json

This has worked well so far.  As of 2018-10-11, expanded the functionality a bit to
provide an ethers to host mapping functionality.

Currently port is hardwired into the www script.


# Installation
```
npm install nodemon -g
npm install
cp config-default.json config.json
# edit config.json to point at the dhcpClient.json file
```

# Running 
Note that on newer systems, if '0.0.0.0' is not passed in on the listen call, node defaults to IPv6 only.

```
npm start
```

# Testing
Note that ethers2host MAC addresses are zero padded.

Can do basic fetches from api using wget or curl:
```
wget -o /dev/null -O - http://localhost:3001/api/clientMac/loko
wget -o /dev/null -O - http://localhost:3001/api/ethers2host/ac:1f:6b:05:85:24
```
