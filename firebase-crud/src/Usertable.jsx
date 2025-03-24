import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './Firebase';
import { FaUser, FaEdit, FaTrash, FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const Usertable = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    role: '',
    editingId: null
  });
  const [showPassword, setShowPassword] = useState(false);

  const cityOption = ['Jaipur', 'Udaipur', 'Jodhpur', 'Chittorgarh'];

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(userData);
  };

  const handleSubmit = async () => {
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        hobbies: formData.hobbies,
        role: formData.role
      };

      if (formData.editingId) {
        await updateDoc(doc(db, "users", formData.editingId), userData);
      } else {
        await addDoc(collection(db, "users"), userData);
      }
      fetchUsers();
      resetForm();
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender || '',
      hobbies: user.hobbies || [],
      role: user.role || '',
      editingId: user.id
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user: ", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      hobbies: checked 
        ? [...prev.hobbies, value]
        : prev.hobbies.filter(hobby => hobby !== value)
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      gender: '',
      hobbies: [],
      role: '',
      editingId: null
    });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight">
          User Management Dashboard
        </h2>

        {/* Input Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-indigo-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-indigo-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-indigo-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Gender</label>
              <div className="flex space-x-6">
                {['Male', 'Female', 'Other'].map(gender => (
                  <label key={gender} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Hobbies</label>
              <div className="grid grid-cols-2 gap-2">
                {['Reading', 'Sports', 'Music', 'Travel'].map(hobby => (
                  <label key={hobby} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={hobby}
                      checked={formData.hobbies.includes(hobby)}
                      onChange={handleHobbyChange}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">{hobby}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">City</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select City</option>
                {cityOption.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
            >
              {formData.editingId ? 'Update User' : 'Add User'}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600">
                <tr>
                  {['S. No.', 'Name', 'Email', 'Gender', 'Hobbies', 'City', 'Actions'].map((header) => (
                    <th
                      key={header}
                      className="py-4 px-6 text-left text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="hover:bg-indigo-50 transition-all duration-150"
                    >
                      <td className="py-4 px-6 text-sm text-gray-900">{index + 1}</td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{user.email}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{user.gender}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{user.hobbies?.join(', ') || ''}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{user.role}</td>
                      <td className="py-4 px-6 text-sm">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleEdit(user)}
                            className="text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            <FaEdit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <FaTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertable;