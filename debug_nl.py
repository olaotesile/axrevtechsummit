import os

path = r"src\App.jsx"
with open(path, 'rb') as f:
    content = f.read()
    
# Let's search for unique-ish parts of lines 592-596
# 592:         ))}
# 593:       </section>

target = b"        ))}\r\n      </section>"
if target in content:
    print("Found CRLF target!")
else:
    target = b"        ))}\n      </section>"
    if target in content:
        print("Found LF target!")
    else:
        print("Neither CRLF nor LF found exactly.")
        print(f"Sample around line 590: {content[20000:20500]}") # Arbitrary large index to find the spot
