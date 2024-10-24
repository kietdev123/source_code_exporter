# Source Code Exporter

**Source Code Exporter** is a Node.js tool designed to compile and aggregate the contents of various files within a specified folder into a single text file. The resulting text file contains the path and content of each file, making it easier to review or analyze source code across multiple files in a project.

## Features

- Export content from all files in a given folder (and its subfolders).
- Support for various file types and formats (e.g., `.js`, `.html`, `.txt`, etc.).
- Output a single text file containing:
  - The file path of each file.
  - The content of each file, with indentation (optional) for readability.
  
## How It Works

- The tool scans the specified folder for all files.
- For each file found, it adds the file path and the content of the file to the output text file.
- The content of each file is indented to improve readability.

### Example of the Output File
```
***core/all.dart

	export 'configs/all.dart';
	export 'constants/all.dart';
	export 'exceptions/all.dart';
	export 'extensions/all.dart';
	export 'helpers/all.dart';
	export 'mixins/all.dart';
	export 'utils/all.dart';
	

***core/utils/agora_voice_client.dart

	import 'dart:async';
	import 'dart:developer';
```

## Prerequisites

Before running the tool, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/source-code-exporter.git
```
```bash
cd source-code-exporter
```
2. Install package 
```bash
npm install
```
## Usage

1. Place the source code files you want to export into a folder.

2. Start the server:
```bash
node server.js
```

3. Open your web browser and navigate to
```bash
http://localhost:3000
```

4. Select the folder containing the source code files.

5. Click the "Export" button, and the tool will generate a single text file (output.txt) with the paths and content of each file.
