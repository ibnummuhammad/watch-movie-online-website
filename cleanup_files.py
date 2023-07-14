import os


path = "/Volumes/iben/movies/the_spongebob_squarepants_movie"
files = os.listdir(path)
print(files)

for file in files:
    if file in [".DS_Store"]:
        os.remove(f"{path}/{file}")

files = os.listdir(path)
print(files)
