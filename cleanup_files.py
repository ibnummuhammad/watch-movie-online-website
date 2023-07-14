import os


delete_list = [".DS_Store", "Zone.Identifier"]

path = "/Volumes/iben/movies"
movies = os.listdir(path)

for movie in movies:
    files = os.listdir(f"{path}/{movie}")
    for file in files:
        for delete in delete_list:
            if delete in file:
                os.remove(f"{path}/{movie}/{file}")
