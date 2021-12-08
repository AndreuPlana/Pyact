To copy requirements between machines 

//Base machine
pip freeze > requiriments.txt //Adds all the current requirements to file 

// in the new machine 
pip install -r requirements.txt