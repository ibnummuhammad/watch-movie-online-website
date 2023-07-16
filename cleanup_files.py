import os


delete_list = ["._", ".DS_Store", "Zone.Identifier"]

path = "/Volumes/iben/movies"
movies = os.listdir(path)

for movie in movies:
    files = os.listdir(f"{path}/{movie}")
    for file in files:
        for delete in delete_list:
            if delete in file:
                file_name = f"{path}/{movie}/{file}"
                print(file_name)
                os.remove(file_name)
