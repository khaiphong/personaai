/* 
  Copyright (c) 2017, 2018, 2019, 2020, 2021 KhaiPhong

  Licensed under the Apache License, Version 2.0 (the "License"); you may not 
  use this file except in compliance with the License which can be copied at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

PersonaDB is a microservice to turn Badger() embedded db into a custom personalized data store via FP (functional programming), plus value-added in GitOp and Prometheus time series. The underlying BadgerDB is (1) wrapped with distriuted graph db in operation, Node-Solid-Server for pod (personal online data) sharing CD/CI via https://github.com/google/ko for executable image.
Ref: fetching data Storing data in Dgraph: https://dgraph.io/blog/post/building-todo-list-react-dgraph/
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
  fmt.Printf("Running %v as user %d in process %d\n", os.Args[2:], os.Geteuid(), os.Getpid())
}

