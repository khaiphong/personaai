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

Topic REST server using PersonaDB
https://engineering.linkedin.com/blog/2016/03/followfeed--linkedin-s-feed-made-faster-and-smarter
*/

package main
 
import(
    "fmt"
    "github.com/syndtr/goleveldb/leveldb"
    "log"
)
 
func main(){
    db, err := leveldb.OpenFile("/khaiphong/personadb", nil)
    if err != nil {
	log.Fatal("Yikes!")
    }
    defer db.Close()
	err = db.Put([]byte("fizz"), []byte("buzz"), nil)
	err = db.Put([]byte("fizz2"), []byte("buzz2"), nil)
	err = db.Put([]byte("fizz3"), []byte("buzz3"), nil)

	iter := db.NewIterator(nil, nil)
	for iter.Next() {
	    key := iter.Key()
	    value := iter.Value()
	    fmt.Printf("key: %s | value: %s\n", key, value)
	}

	fmt.Println("\n")

	for ok := iter.Seek([]byte("fizz2")); ok; ok = iter.Next() {
	    key := iter.Key()
	    value := iter.Value()
	    fmt.Printf("key: %s | value: %s\n", key, value)
	}

	fmt.Println("\n")

	for ok := iter.First(); ok; ok = iter.Next() {
	    key := iter.Key()
	    value := iter.Value()
	    fmt.Printf("key: %s | value: %s\n", key, value)
	}

	iter.Release()
	err = iter.Error()
}


