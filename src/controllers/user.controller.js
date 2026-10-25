import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/uploader.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: "this iss ok",
  // });
  //get user details from your frontend
  // make validation
  // check if user alrady exixt
  //  check image for avatar
  // upload them to cloudnery
  // create user object  - crete db entry
  // send response and remove refresh token and password
  // check for user creation
  // return response
  const { username, fullname, email, password } = req.body;
  // console.log("password", username, fullname, email, password);
  if (
    [username, fullname, email, password].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existUser) {
    throw new ApiError(409, "user with email or username alrady exists");
  }

  const avatarLocalPath = req?.files?.avatar[0]?.path;

  const coverImageLocalPath = req?.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "avatar is required");
  }

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage.url || "",
    email,
    username: username.toLowerCase(),
  });

  const createdUser = User.findById(user?._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "something went worng while creating error ");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registerd successfully "));
});

export { registerUser };
