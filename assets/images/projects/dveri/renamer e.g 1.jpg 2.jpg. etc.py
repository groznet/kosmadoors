import os

folder = os.path.dirname(os.path.abspath(__file__))
script_name = os.path.basename(__file__)

files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f)) and f != script_name]
files.sort()  # sort by name

# Step 1: Rename to temporary names
for i, filename in enumerate(files, start=1):
    ext = os.path.splitext(filename)[1]
    old_path = os.path.join(folder, filename)
    temp_path = os.path.join(folder, f"temp_{i}{ext}")
    os.rename(old_path, temp_path)

# Step 2: Rename from temporary names to final names
temp_files = [f for f in os.listdir(folder) if f.startswith("temp_")]
temp_files.sort()  # ensure order
for i, filename in enumerate(temp_files, start=1):
    ext = os.path.splitext(filename)[1]
    old_path = os.path.join(folder, filename)
    new_path = os.path.join(folder, f"{i}{ext}")
    os.rename(old_path, new_path)
