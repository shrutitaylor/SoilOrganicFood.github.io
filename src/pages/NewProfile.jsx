import React, { useEffect, useState } from 'react';

const NewProfile = ( props ) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    healthGoals: '',
    selectedGoal: '',
    dietPlan: '', // Added dietPlan field to store generated diet plan
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch user details from localStorage when component mounts
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setProfile(user);
    }
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Update user details in localStorage
    localStorage.setItem('user', JSON.stringify(profile));
    // Generate diet plan based on the selected goal
    const generatedDietPlan = await generateDietPlan(profile.selectedGoal, profile);
    // Update diet plan in state
    setProfile((prevProfile) => ({ ...prevProfile, dietPlan: generatedDietPlan }));
    // Disable edit mode
    setEditMode(false);
    // Provide a visual cue for successful update
    alert('Profile updated successfully!');
  };

  const handleDelete = () => {
    // Remove user details from localStorage
    localStorage.removeItem('user');
    // Provide a visual cue for successful deletion
    alert('Profile deleted successfully!');
    // Redirect to the homepage or logout
    // Add redirection logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Function to generate a diet plan based on the selected goal and user's profile
  const generateDietPlan = async (selectedGoal, profile) => {
    // You can implement more advanced logic here, such as calling external APIs or accessing a database
    // For demonstration, let's create a simple mock diet plan based on the selected goal and user's profile
    let dietPlan = '';

    if (selectedGoal === 'weight-loss') {
      // Generate diet plan for weight loss
      dietPlan = `Diet plan for weight loss:\n- Reduce calorie intake\n- Increase consumption of fruits and vegetables\n- Incorporate lean proteins\n- Limit processed foods and sugary beverages\n- Regular exercise regimen (e.g., cardio and strength training)`;
    } else if (selectedGoal === 'muscle-gain') {
      // Generate diet plan for muscle gain
      dietPlan = `Diet plan for muscle gain:\n- Increase overall calorie intake\n- Focus on protein-rich foods such as chicken, fish, eggs, and tofu\n- Incorporate complex carbohydrates for energy\n- Schedule regular strength training sessions\n- Adequate rest and recovery time for muscle growth`;
    } else if (selectedGoal === 'health-improvement') {
      // Generate diet plan for health improvement
      dietPlan = `Diet plan for health improvement:\n- Balanced meals with a variety of nutrients\n- Increase consumption of whole grains, fruits, and vegetables\n- Limit intake of saturated fats and processed foods\n- Stay hydrated with water\n- Engage in regular physical activity for overall well-being`;
    }

    // You can add more detailed and personalized diet recommendations based on the user's profile here

    return dietPlan;
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {props.username && (
        <>
          {!editMode ? (
            <div className="profile-info">
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Age: {profile.age}</p>
              <p>Weight: {profile.weight}</p>
              <p>Height: {profile.height}</p>
              <p>Activity Level: {profile.activityLevel}</p>
              <p>Dietary Preferences: {profile.dietaryPreferences}</p>
              <p>Health Goals: {profile.healthGoals}</p>
              <p>Selected Goal: {profile.selectedGoal}</p>
              <p>Diet Plan:</p>
              <pre>{profile.dietPlan}</pre> {/* Display generated diet plan */}
              <button className="profile-button" onClick={handleEdit}>Edit</button>
              <button className="profile-button" onClick={handleDelete}>Delete</button>
            </div>
          ) : (
            <form onSubmit={handleUpdate}>
              {/* Input fields for profile information */}
              <input type="text" name="name" value={profile.name} onChange={handleChange} />
              <input type="email" name="email" value={profile.email} onChange={handleChange} />
              <input type="number" name="age" value={profile.age} onChange={handleChange} />
              <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
              <input type="number" name="height" value={profile.height} onChange={handleChange} />
              <input type="text" name="activityLevel" value={profile.activityLevel} onChange={handleChange} />
              <input type="text" name="dietaryPreferences" value={profile.dietaryPreferences} onChange={handleChange} />
              <input type="text" name="healthGoals" value={profile.healthGoals} onChange={handleChange} />
              {/* Dropdown or radio button for goal setting */}
              <select name="selectedGoal" value={profile.selectedGoal} onChange={handleChange}>
                <option value="">Select Goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="health-improvement">Health Improvement</option>
              </select>
              <button type="submit" className="profile-button">Update</button>
              <button type="button" className="profile-button" onClick={() => setEditMode(false)}>Cancel</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default NewProfile;