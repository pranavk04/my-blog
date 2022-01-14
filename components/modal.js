import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal(props) {
	let [isOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}


	return (
		<div>

			<button onClick={openModal}
				className="px-2 py-1 rounded bg-primary-900 bg-opacity-20 hover:bg-opacity-30"
			>
				{props.buttonText}
			</button>

			<Transition appear show={isOpen} as={Fragment}>

				<Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}
					className="fixed z-10 inset-0 overflow-y-auto"
				>
					<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
					</Transition.Child>

					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-300"
						leaveFrom="opacity-100 scale-100"
					>
						<div className="inline-block w-full max-w-2xl p6 my-8
							overflow-hidden align-middle transition-all transform bg-white 
							shadow-xl rounded-2xl text-left"
						>

							<Dialog.Title 
								className="text-center text-primary-900 font-medium"
							>
								{props.title}
							</Dialog.Title>

						<Dialog.Description>
							{props.description}
						</Dialog.Description>

							{props.children}

					<button 
						className="inline-flex justify-center px-2 py-1 text-primary-900 rounded-md"
						onClick={() => closeModal()}>Close</button>
						</div>
					</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	)
}
