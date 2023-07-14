import os


path = "/Volumes/iben/movies/the_spongebob_squarepants_movie"
files = os.listdir(path)
print(files)

os.remove(f"{path}/{files[0]}")
files = os.listdir(path)
print(files)
