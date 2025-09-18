import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/siyeb";
if (!MONGODB_URI) throw new Error("MONGODB_URI not set");

declare global {
  var _mongooseConn: { conn: typeof mongoose | null, promise: Promise<typeof mongoose> | null }
}
if (!(global as any)._mongooseConn) (global as any)._mongooseConn = { conn: null, promise: null }

export async function connectDB() {
  const cached = (global as any)._mongooseConn;
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
