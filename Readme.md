# Cribl json2csv function

- **Authors**:		Christoph Dittmann <mulibu.flyingk@gmail.com>
- **Description**:	extending Cribl LogStream with a function converting JSON data to CSV data
- **Version**: 		v1.0.0
- **License**:      MIT

## Introduction
As described in the blog entry "[Extending Cribl: Building Custom Functions](https://www.cribl.io/2018/11/29/extending-cribl-building-custom-functions/)" by Clint Sharp, Cribl LogStream can be extended with custom functions. This project contains the source code to extend Cribl LogStream with a function converting JSON data to CSV data.

## Features
- converting semi-structured JSON data to structured CSV data
- filter and order output fields
- reduce data volume due to the removal of keys in the output event

## Release Notes
- **v1.0.0**/   2019-07-19
	- initial version
    - including Splunk example dashboard
    - including example pipeline and routes

## Credits
Libraries and snippets:
- Node Module json2csv (https://www.npmjs.com/package/json2csv)

## Installation
- Copy the functions/json2csv folder into your existing Cribl app functions folder splunk/etc/apps/cribl/bin/cribl/functions
- Execute npm install in splunk/etc/apps/cribl/bin/cribl/functions/json2csv to install dependencies
- restart Splunk

## License
MIT License

Copyright (c) 2019 Christoph Dittmann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.