/*
Copyright (c) 2017, 2018 KhaiPhong

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License which can be copied at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

   graph.go utility to process cayley graph via /budhnet/graph of
   "What Count" to practicalize TQT principles for people, organizations,
   industries, communities, and national strategies.
*/

package main
 
import(
  "fmt"
//  "net/http"
//  "runtime"
)
 
func main(){
  fmt.Println("Hello, 世界")

//  http.HandleFunc("/", indexHandler)
//  http.ListenAndServe(":64210",nil) // testing the response at localhost:64210
}

/* factor this out with cayley 
func indexHandler( w http.ResponseWriter, r *http.Request){
  fmt.Fprintf(w, "hello world, I'm running on %s with an %s CPU ", runtime.GOOS,runtime.GOARCH)
}
*/
