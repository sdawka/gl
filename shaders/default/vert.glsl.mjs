export default "varying vec3 vnormal;\n\nvoid main() {\n\tvnormal = normalize(MODEL * vec4(NORMAL, 0.0)).xyz;\n\tgl_Position = PROJECTION * VIEW * MODEL * vec4(POSITION, 1.0);\n}";