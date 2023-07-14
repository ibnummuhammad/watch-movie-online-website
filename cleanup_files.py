import os


delete_list = [".DS_Store", "Zone.Identifier"]

path = "/Volumes/iben/movies/top_gun"
files = os.listdir(path)
print(files)

for file in files:
    for delete in delete_list:
        if delete in file:
            os.remove(f"{path}/{file}")

files = os.listdir(path)
print(files)
