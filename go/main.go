/* 
  Copyright (c) 2017, 2018, 2019, 2020, 2021 KhaiPhong

  Licensed under the Apache License, Version 2.0 (the "License"); you may not 
  use this file except in compliance with the License which can be copied at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  
KP-SIS / Chatham-House-Rule Strategic Intelligence Service - One-on-One - riding on KP group intelligence, and a catch-all custom-made installation and maintenance of (1) Secure distributed data centres, (2) OmHub private networking, (3) custom-made Mu, MuHub, OmHub, and (4) Kubernetes scaling world wide.
*/

package main

import (
  "fmt"
  "os"
)	
	
func main() {

//  var me [4]int me of 4 integers MyInstinct, MyMindfulness, MySamadhi, MyPrajna 

  switch os.Args[1] {
    case "run":
	run()
    default:
	panic("I am confused!")
    } 
}

// docker run <image> <cmd> <args>
// go     run main.go run <cmd> <args>

func run() {
  fmt.Printf("Container activation to MuHub and OmHub")
}

func NeuroPhy() {
  fmt.Printf("Neuro and physical services")
}

func PsyFibo() {
  fmt.Printf("Psychological and Fibonacci services")
}

func SIS() {
  fmt.Printf("KP-SIS / Strategic Intelligence Service")
}


