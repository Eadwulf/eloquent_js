def repeatString(string, repeats):
    output = ''
    for i in range(1, repeats+1):
        output += f'{string * i}\n'
    return output
print(repeatString("#", 7))
